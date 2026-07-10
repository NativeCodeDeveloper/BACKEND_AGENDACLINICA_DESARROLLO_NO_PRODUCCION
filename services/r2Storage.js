import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";

const r2 = new S3Client({
    region: "auto",
    endpoint: process.env.R2_ENDPOINT,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY,
        secretAccessKey: process.env.R2_SECRET_KEY,
    },
});

const BUCKET = process.env.R2_BUCKET;


// Genera un key unico para organizar archivos por paciente
// Ejemplo: pacientes/42/1749500000-radiografia.jpg
function construirKey(id_paciente, nombreOriginal) {
    const timestamp = Date.now();
    const nombreLimpio = nombreOriginal.replace(/[^a-zA-Z0-9._-]/g, "_");
    return `pacientes/${id_paciente}/${timestamp}-${nombreLimpio}`;
}


// Sube el buffer del archivo al bucket R2
async function subirArchivo(buffer, key, contentType) {
    const comando = new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: buffer,
        ContentType: contentType,
    });
    await r2.send(comando);
}


// Elimina un archivo del bucket R2 usando su key
async function eliminarArchivoR2(key) {
    const comando = new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: key,
    });
    await r2.send(comando);
}


// Genera una URL temporal firmada para descargar/visualizar el archivo
// expiresIn en segundos (por defecto 1 hora)
async function generarUrlDescarga(key, expiresIn = 3600) {
    const comando = new GetObjectCommand({
        Bucket: BUCKET,
        Key: key,
    });
    return getSignedUrl(r2, comando, { expiresIn });
}


export { construirKey, subirArchivo, eliminarArchivoR2, generarUrlDescarga };
