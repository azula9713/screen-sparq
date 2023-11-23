import TextBox from '../common/TextBox'

export default function SearchBar() {
  return (
    <div className='flex items-center justify-center xxs:max-w-[150px] xs:max-w-max'>
      <TextBox
        label='Search'
        id='search'
        type='search'
        placeholder='Search movies, series, anime...'
        labelVisible={false}
      />
    </div>
  )
}
