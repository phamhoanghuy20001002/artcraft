'use client';
import { useCallback, useEffect, useState } from 'react';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { AiOutlineMenu } from 'react-icons/ai'
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/app/types';
import useSellModal from '@/app/hooks/useSellModal';
import { useRouter } from 'next/navigation';
interface UserMenuProps {
    currentUser?: SafeUser | null
}
const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const router = useRouter();

    const sellModal = useSellModal()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [issOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)

    }, [])
    const onSell = useCallback(() => {

        if (!currentUser) {
            return loginModal.onOpen();
        }
        sellModal.onOpen();
    }, [currentUser, loginModal, sellModal])
    useEffect(() => {
        setIsOpen(false)
    }, [loginModal.isOpen])

    return (

        <div className="relative">

            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => onSell()}
                    className="
                hidden
                md:block
                text-sm
                font-semibold py-3 px-4
                rounded-full
                hover:bg-rose-500
                transition
                cursor-pointer
                "
                >
                    Airbnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="
                p-4
                md:py-2
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-sm
                transition
                "
                >
                    <AiOutlineMenu size={20} />
                    <div className='hidden md:block' >
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {issOpen && (
                <div className='
                absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm
                '>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() => router.push('/history')}
                                    label='Lịch sử mua hàng'
                                />
                                <MenuItem
                                    onClick={() => router.push('/favorites')}
                                    label='Yêu thích'
                                />
                                <MenuItem
                                    onClick={() => router.push('/reservations')}
                                    label='Tranh đã được đặt'
                                />
                                <MenuItem
                                    onClick={() => router.push('/properties')}
                                    label='Tranh của bạn'
                                />
                                <MenuItem
                                    onClick={sellModal.onOpen}
                                    label='Thêm tranh của bạn'
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => signOut()}
                                    label='Logout'
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label='Login'

                                />

                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label='Sign up'
                                />

                            </>
                        )}

                    </div>

                </div>

            )}

        </div>
    )
}
export default UserMenu