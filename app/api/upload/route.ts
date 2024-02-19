import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {

    //load the file from the request

    //upload the file to S3

    //save the metadata to Postgres

    //return a UUID

    return NextResponse.json({status:'ok'})
}