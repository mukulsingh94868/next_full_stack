import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Contact from "../../../models/Contact";

export const GET = async () => {
    try {
        await connect();
        const contactList = await Contact.find();
        return NextResponse.json(contactList, { status: 200 });
    } catch (err) {
        console.error("Database Error:", err);
        return NextResponse.json({ error: "Database Error" }, { status: 500 });
    }
};

export const POST = async (request) => {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        await connect();

        const newContact = new Contact(body);
        await newContact.save();

        return NextResponse.json({ message: "Contact has been created" }, { status: 201 });
    } catch (err) {
        console.error("Database Error:", err);
        return NextResponse.json({ error: "Database Error", details: err.message }, { status: 500 });
    }
};
