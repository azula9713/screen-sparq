import TextBox from '../common/TextBox'

export default function SearchBar() {
  return (
    <div className='flex items-center justify-center w-full'>
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
