import { ResumeTimeline, ResumeSkills, ResumeEducation } from '@/components/common/sections/resume'

export default function Resume() {
  return (
    <main>
      <ResumeTimeline />
      <ResumeSkills />
      <ResumeEducation />
    </main>
  )
}
