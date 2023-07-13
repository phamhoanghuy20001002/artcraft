'use client'
import Container from "../container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from './Categories'
interface NavbarProps {
    currentUser?: SafeUser | null
}
const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {


    return (
        <div className="fixed bg-white h-auto w-full z-10">
            <div className="py-4 border-b-[1px] ">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-1 md:gap-0">
                        <Logo />
                        {/* <Search /> */}
                        <UserMenu currentUser={currentUser} />

                    </div>

                </Container>

            </div>
            <Categories />
        </div>
    );
}

export default Navbar;