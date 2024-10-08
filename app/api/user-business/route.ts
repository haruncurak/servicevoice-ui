import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const userId = searchParams.get('userId');

	if (!userId) {
		return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
	}

	const user = await prisma.user.findUnique({
		where: { id: parseInt(userId, 10) },
		select: { associatedbusiness: true}
	});

	return NextResponse.json(user);
}