import InstructorHeader from "../_components/InstructorHeader";

function MyCourses() {
  return ( <>
    <InstructorHeader title='My courses' description='Here are your latest courses' />
    <div className='mt-4 grid grid-cols-3 gap-4'>
      {/* {result.courses.map(item => (
        <InstructorCourseCard
          key={item._id}
          course={JSON.parse(JSON.stringify(item))}
        />
      ))} */}
    </div>
    <div className='mt-6'>
      {/* <Pagination pageNumber={page} isNext={result.isNext} /> */}
    </div>
  </>
  )
}

export default MyCourses;