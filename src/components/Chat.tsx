'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {useChat} from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const {messages, input, handleInputChange, handleSubmit} = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[440px] bg-white">
      <CardHeader>
        <CardTitle>Chat Ai</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map(message => (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
              {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/mauriciogirardi.png"/>
                  </Avatar>
              )}

              {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>DF</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png"/>
                  </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === 'user' ? 'Humano: ': 'Bot: '}
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter >
        <form className="gap-2 flex w-full" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
          <Button type="button">Send</Button>
        </form>
      </CardFooter>
    </Card>
 )
}