import { Schema, model } from 'mongoose'

export interface IFileMetadata {
	name: string
	type: string
	size: number
}

export const fileMetadataSchema = new Schema<IFileMetadata>(
	{
		name: { type: String, required: true },
		type: { type: String, required: true },
		size: { type: Number, required: true },
	},
	{ collection: 'file_metadata' },
)

export const FileMetadata = model<IFileMetadata>(
	'FileMetadata',
	fileMetadataSchema,
)
