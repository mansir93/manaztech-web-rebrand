'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

export default function ServicesPage() {
    const router = useRouter()
  useEffect(()=>{
    router.replace('/#services')
  },[router])
}
