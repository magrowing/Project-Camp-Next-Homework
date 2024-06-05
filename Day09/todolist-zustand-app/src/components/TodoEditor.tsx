import TextField from './TextField';
import Button from './Button';

export default function TodoEditor() {
  return (
    <div className="flex items-center justify-center gap-[0.8rem] mb-[1.6rem]">
      <TextField style={'flex-1'} placeholder="Enter Todo List" />
      <Button type="button" style={'w-[7.7rem]'} btnStyleType="full">
        Add
      </Button>
    </div>
  );
}
