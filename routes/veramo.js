import express from "express"
import { createCredential } from "../controllers/veramo.controller.js"

const router = express.Router()

router.post("/create-verifiable-credential", createCredential)

export default router
