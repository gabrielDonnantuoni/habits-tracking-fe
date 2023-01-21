interface HabitProps {
  completed: number
}

export function Habit({ completed } : HabitProps) {
  return (
    <div className="bg-sky-700 w-10 h-10 flex items-center justify-center rounded m-2">
      { completed }
    </div>
  )
}