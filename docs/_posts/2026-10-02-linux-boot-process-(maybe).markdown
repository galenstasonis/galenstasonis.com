---
layout: post
title:  "linux boot process (maybe)"
date:   2026-10-02 16:55:00 -0400
categories: linux
---

ok im bored so im just gonna explain my understanding of the linux boot process so yay here we go.

first things first this is for x86_64 UEFI machines, and in this case im just gonna use grub as a bootloader

so you press your powerbutton. what happens?

your system begins turning on and starts its POST (power on self test) im not gonna explain that as thats out of the scope of this post, maybe another time
once that completes your systems firmware on your motherboard either reads from the NVRAM on which EFI exectuable to launch, or if one is not set it will probably try and find an EFI exectuable in one of the fallback directories

once your system finds that EFI exectuable it will launch it, and in this case that would be the GRUB bootloader. GRUB on a GPT UEFI system is just one EFI file, not tons of weird different stages on MBR/BIOS systems. i'm not completely sure how GRUB works, but i believe it starts loading its filesystem drivers (in order to find kernel files, etc) and its config file (typically in /boot/grub/grub.cfg) in order to load the boot entries and which one to launch automatically. wikipedia does a really good, albeit complex explanation of how grub works [here](https://en.wikipedia.org/wiki/GNU_GRUB#/media/File:GNU_GRUB_components.svg)

once a boot option is selected, GRUB loads the kernel and initramfs into memory and shortly after hands off control of the system to linux. the initramfs usually provides just the necessities in order to mount the root filesystem. This usually has disk decryption drivers, keyboard drivers, kernel modules, etc. the kernel temporarily unpacks its initramfs into the temporary root it creates, and will usually load the microcode for your cpu, etc. first. 

finally the actual root filesystem is mounted, typically in /sysroot/, and then switched to. after the root filesystem is mounted and switched to, the kernel then starts the init system, or PID 0. on most systems this is systemd, but there also others such as openrc. at this point most of the important setup is handled by the init process, which in this case will just be systemd.

first, systemd will call getty once for each virtual terminal (the ones you switch to with CTRL+ALT+F*) which is being setup (6 by default). this initializes each terminal and protects them with a login screen.
most systems use a graphical environment and a display manager (a graphical way to login) is started on one of the virtual terminals instead of a console.
that is basically the entire boot process simplified for linux, but it is actually really cool if you go deeper into it, and all the marvelous work people have just done for free??
anyways this basically just came out of my head and a little bit of referencing from the [arch wiki](https://wiki.archlinux.org/title/Arch_boot_process)