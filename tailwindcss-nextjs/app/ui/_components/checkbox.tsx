'use client';

import { useState } from 'react';

const optionskor = [
  { value: 'development', label: '개발' },
  { value: 'game', label: '게임' },
  { value: 'music', label: '음악' },
];

const optionseng = [
  { value: 'development', label: 'Development' },
  { value: 'game', label: 'Game' },
  { value: 'music', label: 'Music' },
];

interface CheckboxProps {
  lang?: 'kor' | 'eng';
}

export function Checkbox({ lang = 'kor' }: CheckboxProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = lang === 'eng' ? optionseng : optionskor;

  function toggleOption(value: string) {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  }

  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-1 text-sm font-bold text-gray-700">
        {lang === 'eng' ? 'Interests' : '관심 분야'}
      </legend>

      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
        >
          <input
            type="checkbox"
            checked={selected.includes(option.value)}
            onChange={() => toggleOption(option.value)}
            className="size-4 accent-blue-600"
          />
          {option.label}
        </label>
      ))}

      <p className="text-xs text-gray-400">
        {lang === 'eng' ? 'Selected items' : '선택 항목'}:{' '}
        {selected.length
          ? selected
              .map((value) => options.find((option) => option.value === value)?.label)
              .join(', ')
          : lang === 'eng'
            ? 'None'
            : '없음'}
      </p>
    </fieldset>
  );
}