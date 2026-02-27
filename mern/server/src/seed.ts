import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Project from './models/Project.js';
import Task from './models/Task.js';
import connectDB from './config/db.js';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // 1. 기존 데이터 삭제 (초기화)
    console.log('Cleaning up existing data...');
    await Task.deleteMany({});
    await Project.deleteMany({});
    await User.deleteMany({});

    // 2. 테스트용 유저 생성
    console.log('Creating seed users...');
    const user = await User.create({
      name: '홍길동',
      email: 'hong@example.com',
      age: 30
    });

    // 3. 유저 ID를 참조하여 프로젝트 생성
    console.log('Creating seed projects...');
    const project1 = await Project.create({
      title: 'MERN 학습 프로젝트',
      description: 'MongoDB와 Express를 배우는 중입니다.',
      owner: user._id
    });

    const project2 = await Project.create({
      title: '개인 포트폴리오',
      description: '나만의 포트폴리오 사이트 만들기',
      owner: user._id
    });

    // 4. 프로젝트 ID를 참조하여 할 일(Tasks) 생성
    console.log('Creating seed tasks...');
    await Task.insertMany([
      {
        content: '백엔드 API 구현하기',
        status: 'done',
        priority: 'high',
        tags: ['backend', 'api'],
        project: project1._id
      },
      {
        content: '프런트엔드 대시보드 연동',
        status: 'pending',
        priority: 'medium',
        tags: ['frontend'],
        project: project1._id
      },
      {
        content: '디자인 시안 확정',
        status: 'pending',
        priority: 'low',
        tags: ['design'],
        project: project2._id
      }
    ]);

    console.log('Seed data created successfully! 🌱');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
