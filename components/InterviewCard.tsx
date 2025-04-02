import React from 'react'
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import DisplayTechicons from './DisplayTechicons';

const InterviewCard = ({interviewId, userId, role, type, techstack,createdAt}
     :InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(feedback ?.createdAt || createdAt || Date.now()).format("MMM D, YYYY");

  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
        <div className='card-interview'>
            <div>
                <div className='absolute top-0 left-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
                    <p className='badge-text'>{normalizedType}</p>
                </div>
                <Image src={getRandomInterviewCover()} alt="cover image" width={90} height={90} className='rounded-full object-fit size-[90px]'/> 
                <h3 className='mt-5 capitalize'>
                    {role} Interview
                </h3>
                <div className='flex flex-row gap-5 mt-3'>
                    <div className='flex flex-row gap-2'>
                        <Image src="/calendar.svg" alt="calendar" width={20} height={20} />
                        <p>{formattedDate}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <Image src="/star.svg" alt="star" width={22} height={22} />
                        <p>{feedback?.totalScore || '---'}/100</p>
                    </div>
                 </div>
                 <p className='line-clamp-3 mt-5'>
                    {feedback?.finalAssessment || "You haven't taken the interview yet. Take it not to improve the skills."}
                 </p>

            </div>
            <div className='flex flex-row justify-between'>
             <DisplayTechicons techstack={techstack} />
             <Button className='btn-primary'>
                <Link href={feedback 
                ? `/interviews/${interviewId}` 
                : `/interviews/${interviewId}`}>
                    {feedback ? 'check feedback': 'view' }
                </Link>
             </Button>
            </div>
        </div>
    </div>
  )
}

export default InterviewCard