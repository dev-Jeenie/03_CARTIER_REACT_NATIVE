export const getAuthToken = async (id: string, password: string) => {
  const formData = new FormData();
  formData.append('email', id);
  formData.append('password', password);

  try {
    const res = await requestApiT({
      url: '/oauth/token',
      method: Method.POST,
      isAuth: true,
      params: formData,
    });
    res?.ok && setToken(res?.data, setStorage);
    return res?.ok || false;
  } catch (e) {
    return false;
  }
};
