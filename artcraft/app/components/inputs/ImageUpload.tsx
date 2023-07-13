
"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../../api/uploadthing/core";
import { toast } from "react-hot-toast";
interface ImageUploadProps {
    onChange: (value: string) => void;
    value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
}) => {



    return (
        <main className="flex h-auto   flex-col justify-center">

            <UploadButton<OurFileRouter>

                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    if (res) {
                        res.map(item => (
                            value = item.fileUrl

                        ))
                        onChange(value)
                        toast.success('success')
                    }

                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}

            />
            {value && (
                <div className=" flex justify-center">
                    <Image
                        height={150}
                        width={150}

                        src={value}
                        alt="House"
                    />
                </div>
            )}


        </main>
    );
}
export default ImageUpload
