import { posterSources, titles } from '@/atoms/titleIdStateAtom'
import SmallScreenPhone from '../Phones/SmallScreenPhone'

export default function SmallPhoneSection() {
  return (
    <>
      {titles.map((t, i) => (
        <SmallScreenPhone titleId={t} key={`${t}-${i}-large`} posterURL={posterSources[t] as string} />
      ))}
    </>
  )
}
