// import { config } from 'dotenv';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import * as bodyParser from 'body-parser';

// config(); // Load environment variables from a .env file

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// const urlencodedParser = bodyParser.urlencoded({ extended: true });
// const jsonParser = bodyParser.json();

// async function textOnlyMode(prompt) {
//     try {
//         // For text-only input, use the gemini-pro model
//         const result = await model.generateContent(prompt);
//         const generatedText = result.response.candidates[0].content.parts[0].text;
//         return { message: generatedText };
//     } catch (error) {
//         console.error("Error generating content:", error);
//         throw error;
//     }
// }

// module.exports = async (req, res) => {
//     // Apply body parser middleware
//     urlencodedParser(req, res, () => {});
//     jsonParser(req, res, () => {});

//     // Define route handling
//     if (req.method === 'POST' && req.url === '/api/foodai') {
//         // Handle POST request to /api/foodai
//         const prompt = req.body.prompt || "Suggest me some non-veg foods";
//         try {
//             const result = await textOnlyMode(prompt);
//             res.status(200).json(result);
//         } catch (error) {
//             console.error("Error handling request:", error);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     } else {
//         // Handle unsupported methods or routes
//         res.status(404).json({ error: 'Not Found' });
//     }
// };


import { config } from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as bodyParser from 'body-parser';

config(); // Load environment variables from a .env file

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();

async function textOnlyMode(prompt) {
    try {
        // For text-only input, use the gemini-pro model
        const result = await model.generateContent(prompt);
        const generatedText = result.response.candidates[0].content.parts[0].text;
        return { message: generatedText };
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}

module.exports = async (req, res) => {
    // Allow requests from all origins (you might want to restrict this to specific origins in a production environment)
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Allow the POST method from any origin
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Allow the Content-Type header in requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Respond with a 200 status for OPTIONS requests
        return;
    }

    // Apply body parser middleware
    urlencodedParser(req, res, () => {});
    jsonParser(req, res, () => {});

    // Define route handling
    if (req.method === 'POST' && req.url === '/api/foodai') {
        // Handle POST request to /api/foodai
        const prompt = req.body.prompt || "Suggest me some non-veg foods";
        try {
            const result = await textOnlyMode(prompt);
            res.status(200).json(result);
        } catch (error) {
            console.error("Error handling request:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handle unsupported methods or routes
        res.status(404).json({ error: 'Not Found' });
    }
};


