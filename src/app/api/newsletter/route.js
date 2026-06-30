export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append('entry.1343205363', email);

    await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSep7TPkje4UnwKTqDHyRPSfjHvzdynBOGMYhvLQSNxaJjbYjw/formResponse',
      {
        method: 'POST',
        body: formData,
      }
    );

    return Response.json({
      success: true,
      message: 'Subscribed successfully.',
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: 'Something went wrong.',
      },
      { status: 500 }
    );
  }
}