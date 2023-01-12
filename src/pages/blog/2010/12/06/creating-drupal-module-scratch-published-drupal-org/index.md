---
title: "Creating a Drupal module from scratch and getting it published on drupal.org"
date: "2010-12-06T00:00:00.000Z"
tags: ["drupal"]
layout: "../../../../../../layouts/BlogPost.astro"
---

import { Image } from '@astrojs/image/components';

Having developed Drupal modules for over a year now, and now finally getting one published (<a href="http://drupal.org/project/simplify" target="_blank">Simplify</a>!), I have a pretty good grasp of the steps you need to take to create a module, run it through a code review, submit an application for a drupal.org CVS account, and get your very own project page at drupal.org. I’ll try to take you through the main aspects that you need to have good understanding.

Your first step is to learn how to create a custom Drupal module. I’m assuming you already know PHP (if not, Drupal probably isn’t a great place to start because it’s ‘hook’ mentality has a league of it’s own…). Some great books to pickup are <a href="http://www.amazon.com/Using-Drupal-Angela-Byron/dp/0596515804/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1291671014&amp;sr=1-1" target="_blank">Using Drupal</a> and <a href="http://www.amazon.com/gp/product/1430228385/ref=pd_lpo_k2_dp_sr_2?pf_rd_p=486539851&amp;pf_rd_s=lpo-top-stripe-1&amp;pf_rd_t=201&amp;pf_rd_i=1590597559&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_r=0DR4QX7G382XADHSXMRT" target="_blank">Pro Drupal Development</a>. Using Drupal will give you a basic understanding of the Drupal platform (and give you a great foundation to start from as well), and Pro Drupal Development will take you through all of the steps of creating a custom module.

Once you know how to create a module, you need to pick a project you want to work on that does not currently exist on the drupal.org project list and that has clear direction and a plan. This project will be your first Drupal child and (when complete) will be submitted to drupal.org reviewers when you apply for a CVS account (how projects are managed on Drupal). It’s important you have good passion for the module you are creating, have ran it through the <a href="http://drupal.org/project/coder" target="_blank">Coder</a> module, and you follow all of the <a href="http://drupal.org/coding-standards" target="_blank">Drupal Coding Standards</a>. Drupal modules follow their own set of coding standards, and its very important you follow them exclusively, otherwise your cvs account reviewers will tear you apart. I advise to make your first release as simple as possible, for two reasons: it makes it easier for your cvs application to get approved, and it lessons the burden of the Drupal review volunteers.

Once you have created your module entirely, your next step is to <a href="http://drupal.org/cvs-application" target="_blank">apply for that cvs account</a>. Their application process DOES TAKE TIME, and you need to have at the very least a few weeks of going back and forth with them before you are finally approved for a CVS account. The review staff is all made 100% of volunteers, and I’m sure their process can be greatly improved, but please be courteous to the staff as they are very knowledgable and great people to deal with, and surely keep the Drupal codebase clean and maintainable.

Once you have a CVS account, the rest is a piece of cake. After getting approved for a CVS account, <a href="http://drupal.org/node/100748" target="_blank">just follow these instructions</a> and the rest is history. It took me roughly 1.5 hours and my project page was online, had a screenshot, description and a downloadable release. And that was me never using CVS before (being a svn/git boy myself…). You only have to go through this process once, then you will also have access to make any other new projects any time you want, which gives you a lot of flexibility.

If you have any further tips, please be sure to leave them below. Good luck Drupalers!
