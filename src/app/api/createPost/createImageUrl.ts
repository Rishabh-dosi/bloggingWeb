import {createClient} from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string);

export async function addImageToSupabase(image: File, fileType: String = 'blogsImg') {
    console.log("object", fileType);
    const { data, error } = await supabase.storage.from('blogging-images').upload(`${fileType}/${image.name}`, image);
    if (error) throw error;
    const publicUrl = await supabase.storage.from('blogging-images').getPublicUrl(`${fileType}/${image.name}`)
    return publicUrl.data.publicUrl;
}