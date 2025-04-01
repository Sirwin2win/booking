'use server';
import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import {ID} from 'node-appwrite';
import { redirect } from "next/navigation";
import checkAuth from "./checkAuth";
import { revalidatePath } from "next/cache";
import checkRoomAvailability from "./checkRoomAvailability";
import error from "../error/error";


async function bookRoom(peviouseState,formData) {
    const sessionCookie = cookies().get('appwrite-session');
    if(!sessionCookie){
        redirect('/login');
    }
    try {
       const {databases} = await createSessionClient(sessionCookie.value);
       //Get user
       const {user} = await checkAuth();
       if(!user){
        return{
            error:'You must be logged in to book a room'
        }
       }
       // Extract date and time from the formdata
       const checkInDate = formData.get('check-in-date');
       const checkInTime = formData.get('check-in-time');
       const checkOutDate = formData.get('check-out-date');
       const checkOutTime = formData.get('check-out-time');
       const roomId = formData.get('room_id');
       const amount = formData.get('amount');

       // Combine date and time to ISO 8601 format
       const checkInDateTime = `${checkInDate}T${checkInTime}`;
       const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;
       // check if room is available
       const isAvailable = await checkRoomAvailability(roomId,checkInDateTime, checkOutDateTime);
       if(!isAvailable){
        return{
            error : 'This room is already booked for the selected time'
        }
       }
       // Pastack integeration

        // const config = {
        //     reference: (new Date()).getTime().toString(),
        //     email: user.email,
        //     amount: amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        //     publicKey: process.env.PAYSTACK_PUBLIC_KEY,
        // };
        
        // // you can call this function anything
        // const onSuccess = (reference) => {
        //   // Implementation for whatever you want to do with reference and after success call.
        //   console.log(reference);
        // };
        // if(onSuccess){
        //     return{
        //         success:reference
        //     }
        // }
        
        // // you can call this function anything
        // const onClose = () => {
        //   // implementation for  whatever you want to do when the Paystack dialog closed.
        //   console.log('closed')
        // }
        // if(onClose){
        //     return{
        //         error:'Transaction closed'
        //     }
        // }


       const bookingData = {
        check_in:checkInDateTime,
        check_out:checkOutDateTime,
        user_id:user.id,
        room_id:roomId
       }
       // create booking
       const newBooking = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
        ID.unique(),
        bookingData
       );
       // revalidate cache
    //    revalidatePath('/bookimgs','layout');
    return{
        success:true
    }
    } catch (error) {
        console.log('Failed to book room', error);
        return{
            error:'Something went wrong booking the room'
        };
    }

}
export default bookRoom;