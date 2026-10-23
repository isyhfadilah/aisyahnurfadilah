import Image from 'next/image'

export const TimeEducation = () => {
  return (
    <ol className="relative max-w-3xl border-s border-dark/20">
      <li className="relative mb-10 ms-8 rounded-2xl border border-dark/10 bg-white p-5 sm:p-7">
        <span className="absolute -start-[3.05rem] top-5 grid size-10 place-items-center rounded-full border-4 border-paper bg-secondary">
          <Image
            src="/images/smea.png"
            alt="SMKN 2 Sumedang"
            height={28}
            width={28}
            className="h-7 w-7 rounded-full object-cover"
          />
        </span>
        <time className="mb-2 block text-xs font-bold uppercase tracking-wide text-dark-gray">Juli 2021 - May 2024</time>
        <h3 className="mb-1 font-display text-lg font-bold text-dark">SMKN 2 Sumedang</h3>
        <p className="text-sm font-medium text-dark-gray">Software Engineering Major</p>
      </li>
    </ol>
  )
}
