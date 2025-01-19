const { test, expect, request } = require('@playwright/test');

test.describe('Test API menggunakan Playwright', () => {
  test('API GET', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/unknown');
    expect(res.status()).toBe(200);
    const respondBody = await res.json();
    console.log(respondBody);
    expect(respondBody.page).toBe(1);
    expect(respondBody.per_page).toBe(6);
  });

  test('API GET Single User', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users/2');
    expect(res.status()).toBe(200);
    const respondBody = await res.json();
    console.log(respondBody);
    expect(respondBody.data.id).toBe(2);
    expect(respondBody.data.email).toBe('janet.weaver@reqres.in');
    expect(respondBody.data.first_name).toBe('Janet');
    expect(respondBody.data.last_name).toBe('Weaver');
    expect(respondBody.data.avatar).toBe('https://reqres.in/img/faces/2-image.jpg');
  });

  test('API POST', async () => {
    const apiContext = await request.newContext();
    const postData = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    const res = await apiContext.post('https://reqres.in/api/login', {
      data: postData,
    });
    expect(res.status()).toBe(200);
    const respondBody = await res.json();
    console.log(respondBody);
    expect(respondBody.token).toBe('QpwL5tke4Pnpja7X4');
  });
  
  
  test('API PUT', async () => {
    const apiContext = await request.newContext();
    const putData = {
      name: 'morpheus',
      job: 'zion resident',
    };
    const res = await apiContext.put('https://reqres.in/api/users/2', {
      data: putData,
    });
    expect(res.status()).toBe(200);
    const respondBody = await res.json();
    console.log(respondBody);
    expect(respondBody.name).toBe('morpheus');
    expect(respondBody.job).toBe('zion resident');
  });

  test('API DELETE', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.delete('https://reqres.in/api/users/2');
    expect(res.status()).toBe(204); 
    console.log('User deleted successfully');
  });
});
