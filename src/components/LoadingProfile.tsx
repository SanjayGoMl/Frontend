type ILoadingProfile = {
  name: string
  logo?: string
}
export const LoadingProfile: React.FC<ILoadingProfile> = ({
  name,
  logo,
}: {
  name: string
  logo?: string
}) => (
  <div className="flex my-4">
    <div className="mr-2 flex-shrink-0 w-10 h-10 flex justify-center items-center">
      {logo && (
        <div
          className="border border-slate-200 rounded-full"
          style={{
            backgroundImage: `url("${logo}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '35px auto',
            overflow: 'hidden',
            width: 40,
            height: 40,
          }}
        />
      )}
    </div>
    <div>
      <span className="flex items-center">
        <h4 className="text-sm font-bold text-gray-600 dark:text-slate-200">
          {name}
        </h4>
      </span>
      <div className="mt-2 px-6 py-4 w-fit rounded-lg bg-slate-100 dark:bg-slate-300">
        <div className="dot-typing" />
      </div>
    </div>
  </div>
)
