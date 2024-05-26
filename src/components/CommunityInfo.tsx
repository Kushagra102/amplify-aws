"use client"
import { getCommunityById } from "@/app/_actions/actions"
import { StorageImage } from "@aws-amplify/ui-react-storage"
import { useEffect, useState } from "react"

const CommunityInfo = ({ communityId }: { communityId: string }) => {
    const [data, setData] = useState<any>(null)
    useEffect(() => {
        async function communityData() {
            setData(await getCommunityById({ id: communityId }))
        }
        communityData()
    }, [communityId])

    console.log(data)
    if(!data) {
        return <div>Loading...</div>	
    }
    return (
        <div className="w-full max-w-full">
            <div>Name:  {data?.name}</div>
            <div>By  {data?.owner}</div>
            <div>Description  {data?.description}</div>
            <div>Started On - {data?.createdAt}</div>
            <div className="w-full max-w-full">
                <StorageImage
                  alt={`banner ${data?.name}`}
                  path={data?.banner}
                />
              </div>
        </div>
    )
}

export default CommunityInfo