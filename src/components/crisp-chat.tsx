"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b2289396-2b49-4b77-905d-64ed7fff499f")
    }, [])

    return null
}