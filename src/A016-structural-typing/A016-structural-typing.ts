type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
};

const bdUser = { username: 'Mayk', password: '123456' };
const sentUser = { username: 'Mayk', password: '123456', Permissions: '' };
const loggerdIn = verifyUser(bdUser, sentUser);
console.log(loggerdIn);
