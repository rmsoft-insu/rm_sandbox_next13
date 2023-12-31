"use client";

import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./avatar";
import MenuItem from "./menuItem";
import { Modal } from "../modal";
import { Button } from "../ui/button";
import { signIn, signOut } from "next-auth/react";

type User = {
  email: string;
  name: string;
  image?: string;
};

interface UserProps {
  currentUser: User | null;
}

const UserMenu: React.FC<UserProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100">
            Sandbox
          </div>
          <div
            onClick={toggleOpen}
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          >
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar src={currentUser?.image} />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 overflow-hidden text-sm bg-white shadow-md rounded-xl md:w-3/4 top-12">
            {currentUser ? (
              <MenuItem onClick={signOut} label="Logout" />
            ) : (
              <>
                <MenuItem onClick={() => setLoginOpen(true)} label="Login" />
                <MenuItem onClick={() => {}} label="Sign up" />
              </>
            )}
          </div>
        )}
      </div>
      <Modal
        title="Login"
        description="Login"
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      >
        <Button className="w-full" onClick={() => signIn("google")}>
          Login
        </Button>
      </Modal>
    </>
  );
};

export default UserMenu;
