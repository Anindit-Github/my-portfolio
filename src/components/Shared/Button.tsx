import { clsx } from 'clsx';
import { Terminal, FileText } from 'react-feather';

type ButtonProps = {
    color: string;
    text: string;
    component?: string;
};

const iconComponents: Record<string, React.ElementType | ''> = {
    'View Projects': '',
    'Contact Me': Terminal,
    'Download Resume': FileText
};

export default function Button({ color, text, component }: ButtonProps) {
    const ButtonIcon = iconComponents[text];
    return (
        <button
            className={clsx(
                'font-mono text-sm font-semibold cursor-pointer rounded-md py-2 px-4 w-48 h-12 my-8 md:mr-2 mx-2 text-zinc-100 flex items-center justify-center gap-2',
                color === 'cyan' && 'bg-cyan-400 hover:bg-cyan-600',
                color === 'gray' && 'bg-gray-800 hover:bg-gray-900'
            )}
        >
            {ButtonIcon ? (
                <ButtonIcon size={18} className="shrink-0" />
            ) : (
                <span className="text-sm">{component}</span>
            )}
            {text}
        </button>

    )
}

