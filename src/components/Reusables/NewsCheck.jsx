import React from 'react'

const NewsCheck = () => {
  return (
    <div>
      <label className="flex dark:text-[#ffffff] items-center small mt-6 text-sm text-[#0c0c0c]">
          <input
            type="checkbox"
            name="subscribe"
            // checked={formData.subscribe}
            // onChange={onChange}
            className="checkbox mr-2 dark:checkbox-accent  w-5 h-5  dark:border dark:border-zinc-600 rounded-full"
          />
          Subscribe to our newsletter for all the latest updates!
        </label>
    </div>
  )
}

export default NewsCheck
