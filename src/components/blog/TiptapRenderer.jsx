import RichText from './RichText';
export default function TiptapRenderer(props) { const base=(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api').replace(/\/api\/?$/, ''); return <RichText {...props} mediaBase={base}/>; }
