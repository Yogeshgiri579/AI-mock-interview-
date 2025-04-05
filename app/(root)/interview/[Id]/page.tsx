import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";

import { getFeedbackByInterviewId, getInterviewById } from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
 import DisplayTechIcons from "@/components/DisplayTechicons";

interface RouteParams {
  params: { Id: string };
}

const InterviewDetails = async ({ params }: RouteParams) => {
  const { Id } = params;

  // DEBUG LOGGING
  console.log("🧩 Route param Id:", Id);

  if (!Id || typeof Id !== "string" || Id.trim() === "") {
    throw new Error("Invalid or missing interview ID from route params");
  }

  const user = await getCurrentUser();
  console.log("👤 Current user:", user);

  const interview = await getInterviewById(Id);
  if (!interview) {
    console.log("❌ Interview not found for ID:", Id);
    redirect("/");
  }

  const feedback = await getFeedbackByInterviewId({
    interviewId: Id,
    userId: user?.id!,
  });

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview.type}
        </p>
      </div>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        interviewId={Id}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
      />
    </>
  );
};

export default InterviewDetails;