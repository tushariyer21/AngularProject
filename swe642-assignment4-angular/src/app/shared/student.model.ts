export class Student {
    constructor(
        public studentId: string,
        public firstname: string,
        public lastname: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: string,
        public phone: string,
        public email: string,
        public homePage: string,
        public dateprovided: string,
        public likeCampus: string,
        public interest: string,
        public comments: string,
        public graduateMonth: string,
        public graduateYear: string,
        public mean: string,
        public recommend?: string,

    ) { }
}