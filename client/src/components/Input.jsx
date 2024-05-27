import * as React from "react"

const Input = (
  ({ className, type, value, ...props }) => {
    return (
      <input
        type={type}
        value={value}
        className={(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-aqua focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        )}
        {...props}
      />
    )
  }
)
 
export { Input }

