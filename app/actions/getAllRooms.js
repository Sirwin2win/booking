'use server';

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


async function getAllRooms() {
    try {
        const {databases} = await createAdminClient();

        // Fetch Rooms

        const {documents : rooms} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE, 
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
        );
        // revalidate the cache for this path
        // revalidatePath('/');

        return rooms;
    } catch (error) {
        console.log('Failed to fetch rooms', error);
        // redirect('/error')
    }
}

export default getAllRooms;