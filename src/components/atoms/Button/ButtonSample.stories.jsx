import { ButtonSample } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonSample',
  component: ButtonSample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'ButtonSample',
  },
};

export const Secondary = {
  args: {
    label: 'ButtonSample',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'ButtonSample',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'ButtonSample',
  },
};
