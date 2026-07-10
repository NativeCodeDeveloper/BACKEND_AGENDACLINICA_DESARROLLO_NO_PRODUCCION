import OpenAI from 'openai';
import {tools , ejecutarTool} from '../services/cortexTools.js';
import contexto from "../services/cortexContext.js"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default class CortexController {

    constructor(client) {
    }

    static async enviarMensaje(req, res) {
        try{

            // 1. definir que es lo que se recibe del front
            const mensaje = req.body.mensaje;


            //2.crear el historial de conversacion de openai
            const historialConversacion = [
                {role: "system", content: contexto}, ...mensaje
            ];



            //3.primera llamada a openai
            let openaiConversacion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: historialConversacion,
                tools,
                tool_choice: "auto",
                max_tokens: 500
            });

            //4.openai envia una respuesta inical esta es guardada en esta variable
            /*
              La informacion que trae la variable es esto:

              role: "assistant",
              content: "¡Hola! ¿En qué puedo ayudarte?",
              tool_calls: undefined

              si viene con una tool_calls o llamada a herramienta debemos ejecutarla

            * */
            let respuestaOpenAi = openaiConversacion.choices[0].message;


            //5. esta respuesta queda guardada en memoria y envia varias cosas que podemos usar pero lo que nos interesa es
            /*
            saber si viene con una tool_calls
            * */

      while (respuestaOpenAi.tool_calls) {

          historialConversacion.push(respuestaOpenAi);

          let tools_calls = respuestaOpenAi.tool_calls;

          for (const toolsCall of tools_calls) {
              const nombre = toolsCall.function.name;
              const argumentos = JSON.parse(toolsCall.function.arguments);
              const resultado = await ejecutarTool(nombre, argumentos);

              historialConversacion.push({
                  role: "tool",
                  tool_call_id: toolsCall.id,
                  content: typeof resultado === 'string' ? resultado : JSON.stringify(resultado),
              });
          }

          openaiConversacion = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: historialConversacion,
              tools,
              tool_choice: "auto",
              max_tokens: 500
          });

          respuestaOpenAi = openaiConversacion.choices[0].message;
      }

      res.status(200).json({
          respuesta: respuestaOpenAi.content
      });

        }catch(err){
            res.status(500).send({
                message: err.message,
            })
        }
    }
}
