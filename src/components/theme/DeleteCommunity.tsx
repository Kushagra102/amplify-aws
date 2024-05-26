"use client"
import { deleteCommunity } from '@/app/_actions/actions'
import { Button } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

const DeleteCommunity = ({ communityId }: { communityId: string }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const router = useRouter();

    const deleteFn = async () => {
        setIsDeleting(true);
        try {
            await deleteCommunity({
                id: communityId || "",
            });
        } catch (error) {
            console.error("Failed to delete community", error);
            throw error;
        } finally {
            setIsDeleting(false);
            router.replace('/community');
        }
    }

    return (
        <Button onClick={deleteFn} disabled={isDeleting} backgroundColor="#047D95" color="white" className='mx-5'> 
            {isDeleting ? 'Deleting...' : 'Delete Community'}
        </Button>
    )
}

export default DeleteCommunity
