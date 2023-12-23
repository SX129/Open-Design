"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { User } from '@/payload-types'

// Component shown after user logs in
const UserAccountNav = ({user}: {user: User}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className='overflow-visible'>
            <Button variant='ghost' size='sm' className='relative'>My Account</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white w-60' align='end'>
            <div className='flex items-center justify-center gap-2'>
                <div className='flex flex-col space-y-0.5 leading-none'>
                    <p className='font-medium text-sm text-black'>{user.email}</p>
                </div>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav