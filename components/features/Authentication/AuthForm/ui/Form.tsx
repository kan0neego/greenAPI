"use client";
import React, { FormEvent, useEffect } from "react";
import { AuthForm } from "@/components/entities/Form";
import { useUserStore } from "@/components/entities/User";
import { useRouter } from "next/navigation";

export default function Form() {
  const { stateInstance, updateUserData } = useUserStore();
  const router = useRouter();
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const target = ev.target as typeof ev.target & {
      IdInstance: { value: number };
      ApiTokenInstance: { value: string };
    };
    const IdInstance = target.IdInstance.value;
    const ApiTokenInstance = target.ApiTokenInstance.value;
    updateUserData(IdInstance, ApiTokenInstance);
  };

  useEffect(() => {
    switch (stateInstance) {
      case "authorized": {
        router.push("/chat");
        return;
      }
      case "blocked": {
        console.log("User blocked");
        break;
      }
      case "notAuthorized": {
        console.log("User not auth");
        break;
      }
    }
  }, [stateInstance]);

  return <AuthForm onSubmit={handleSubmit} />;
}
