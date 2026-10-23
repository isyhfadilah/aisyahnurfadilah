import Image from 'next/image'

const education = [
  {
    institution: 'SATU University',
    degree: "Bachelor's degree, Informatics",
    time: 'Aug 2024 – Present',
    image: undefined,
    mark: 'SU',
    detail: 'Grade: 4.0 · Treasurer of OneTalk Public Speaking Club and One by Code Coding Club.'
  },
  {
    institution: 'SMK Negeri 2 Sumedang',
    degree: 'Computer Software Engineering',
    time: 'Jul 2021 – May 2024',
    image: '/images/smea.png',
    mark: 'SMK',
    detail:
      'Top student overall and highest grade in the Software Engineering major. Vice Chairman of the Gridas Coding extracurricular.'
  }
]

export const TimeEducation = () => {
  return (
    <div className="space-y-10">
      <ol className="relative max-w-3xl border-s border-dark/20">
        {education.map((item) => (
          <li key={item.institution} className="relative mb-6 ms-8 rounded-2xl border border-dark/10 bg-white p-5 sm:p-7">
            <span className="absolute -start-[3.05rem] top-5 grid size-10 place-items-center rounded-full border-4 border-paper bg-secondary">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.institution}
                  height={28}
                  width={28}
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : (
                <span className="text-[9px] font-black text-dark">{item.mark}</span>
              )}
            </span>
            <time className="mb-2 block text-xs font-bold uppercase tracking-wide text-dark-gray">{item.time}</time>
            <h3 className="mb-1 font-display text-lg font-bold text-dark">{item.institution}</h3>
            <p className="text-sm font-semibold text-dark-gray">{item.degree}</p>
            <p className="mt-3 text-sm leading-6 text-dark-gray">{item.detail}</p>
          </li>
        ))}
      </ol>

      <div className="max-w-3xl space-y-4">
        <h3 className="font-display text-xl font-bold text-dark">Certifications</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {['Junior Programmer — BNSP', 'Junior Assistant Programmer — BNSP'].map((certificate) => (
            <li key={certificate} className="rounded-2xl border border-dark/10 bg-white p-5">
              <p className="font-bold text-dark">{certificate}</p>
              <p className="mt-1 text-sm text-dark-gray">Issued May 2024 · Valid through May 2027</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
