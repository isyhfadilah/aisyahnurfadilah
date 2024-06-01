import { ResumeTimeline, ResumeSkills, ResumeEducation } from '@/components/common/section/resume'

export default function Resume() {
  return (
    <main>
      <ResumeTimeline />
      <ResumeSkills />
      <ResumeEducation />
    </main>
  )
}
