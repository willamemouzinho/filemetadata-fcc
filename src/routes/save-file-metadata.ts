import type { Request, Response } from 'express'
import { FileMetadata } from '../models/file-metadata'

export const saveFileMetadata = async (req: Request, res: Response) => {
	try {
		const uploadedFile = req.file
		if (!uploadedFile) {
			return res.status(400).json({ message: 'file not found.' })
		}

		const file = new FileMetadata({
			name: uploadedFile.originalname,
			type: uploadedFile.mimetype,
			size: uploadedFile.size,
		})
		await file.save()

		return res.status(200).json({
			name: file.name,
			type: file.type,
			size: file.size,
		})
	} catch (error) {
		console.error(error)
		// return res.status(500).json(error)
		return res.status(500).json({ message: 'internal server error.' })
	}
}
