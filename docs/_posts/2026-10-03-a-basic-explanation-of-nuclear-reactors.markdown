---
layout: post
title:  "a basic explanation of nuclear reactors"
date:   2026-10-03 20:45:00 -0400
categories: nuclear
---

DISCLAIMER: this is probably somewhat inaccurate

ok this is just my somewhat basic understanding coming all from my head, this is gonna be for BWRs because they are simpler to explain.

so nuclear reactors use uranium to generate heat to generate steam which spins a turbine connected to a power generator. how does that uranium generate that heat?

atoms are made up of protons, neutrons, and electrons. if an atom has too many neutrons, it will become unstable, which i'll explain later. but unstable atoms are exactly what we want. in most nuclear reactors, uranium 235 is used as a fuel. since uranium 235 is naturally unstable, and thus radioactive it slowly decays (very slowly, half life of 704 million years) releasing neutrons off of it, flying towards other uranium atoms. every time a neutron hits another u235 atom, it becomes extremely unstable and releases on average 2.43 neutrons, as well as a lot of heat (energy). since it releases more neutrons than it required to fission, it is capable of sustaining a chain reaction. when neutrons are moderated, or slowed down, they also have a greater probablity to fission. 

now that we sort of understand how nuclear fission works, how do we contain it and generate power with it?
first you need to contain it. in nuclear reactors this is the RPV, or reactor pressure vessel. 
in the RPV, there are the fuel rods that contain the uranium pellets and are cladded by zirconium to contain them. you might be wondering, if uranium releases enough neutrons to start a chain reaction upon fissioning, what is stopping it from becoming, well a nuclear bomb? here comes control rods. these are often made of boron or some other substance that absorbs neutrons well. these go inbetween the fuel rods  in order to stop the uranium by fissioning. the way this works is quite obvious. the control rods absorb neutrons, and when most, if not all neutrons are absorbed by the control rods, there are not many left to keep the chain reaction going. control rods are also the main way operators control the power level of the reactor, as they can be moved in and out of the core.

the RPV is also flooded with water. not only does this serve as a neutron moderator (as discussed in the first section), it is also the primary cooling method. when the control rods are raised enough for there to be enough fissioning, the water starts to heat up. eventually it heats up enough to boil into steam, where it rises through a steam separator and dryers, making sure no water gets into the steam lines. then this superheated steam starts making its way to the steam turbine.

<img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Bwr-rpv.svg/500px-Bwr-rpv.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail" alt="diagram of the RPV" hight="200">

there are multiple valves on the turbine, as well as a bypass valve that returns the steam to the condenser, bypassing the turbine, in cases where the reactor is running but the turbine isnt. with these valves, you can control the amount of steam pressure there is. this is very important, as if you just keep the valves all the way open, there wont be enough built up steam to move the turbine. by keeping the steam pressure at about 7 MPa, you will have plenty of pressure to move the turbine. Once this steam passes through the turbine, it gets sucked into the condenser directly below the turbine. 

the condenser works by maintaining a vacuum to pull steam down from the turbine hoods. there are a series of many pipes with water flowing through them. as the steam passes by these pipes, it is cooled down and condenses back into water. this water falls down into the hotwell, basically a storage location for water at the bottom of the condenser
![diagram of a condenser](https://nuclear-power.com/wp-content/uploads/2017/06/Surface-Condenser-Main-Condenser-schema.png)

well how does the water in those pipes stay cool? well, these are pumped by the condensate pumps to the familiar cooling towers you see, as a very fast rate of speed. i think explaining how cooling towers work is a bit out of the scope of this post, so just know that the cooling towers, well cool the hot water. the reason we have it cooled by a separate loop is to prevent any release of radiation into the air.

once the condensed water is in the hotwell, it is quickly pumped to a deaerator. the deaerator is used to remove dissolved corrosive gases from the feedwater, most commonly oxygen. this is very important to prevent damage to the metal pipes within the water loop. i don't really know how these work, but wikipedia has a [great article](https://en.wikipedia.org/wiki/Deaerator)     on it.

once the corrosive gases are removed from the feedwater, is is them pumped back to the RPV to boil and begin the process again.  

now this may seem very precarious and unsafe, but don't worry, i'll explain some of the many safety systems that make nuclear power one of the safest methods in the world.
first, every nuclear power plant is required to have EDGs, or emergency diesel generators. incase of a power outage, these generators are able to spin up in about 30s to provide power to necessary cooling systems and some other systems. even if you are without power for minutes or even longer, there is also the RCIC, or reactor core isolation cooling. the RCIC is a steam driven turbine that takes all the high pressure steam coming from the reactor to spin its own turbine. this turbine pumps water from the condensate storage tanks (extra water tanks), and pumps it immediately to the reactor. once the turbine spins up fast enough, it is capable of pumping enough water to almost substitute the normal feedwater pumps. then there is LPCI, or low pressure coolant injection. when the steam pressure is low enough, these electrically powered pumps are able to inject even more water into the core. in a last resort, there is also SLCS, or standby liquid control system. in an emergency, liquid boron can be released from tanks above the RPV into the reactor vessel, bringing to a guaranteed shutdown state. even if those systems, and all the other ones i didnt mention failed, you are still probably fine, even if it melts down. every BWR has a large containment structure, so even if the fuel rods melt, is is nearly impossible for any radiation to escape. wikipedia explains these systems in detail [here](https://en.wikipedia.org/wiki/Boiling_water_reactor_safety_systems#).

now why is nuclear a very good power source? first of all, it has near 0 carbon emissions, unlike coal or oil power generation methods. some people may say that nuclear power is not renewable, but there is atleast a billion more years worth of electricity worth of nuclear fuel left on earth. i highly doubt humanity will make it a billion years, and if we somehow do, we will not be using nuclear power in the way that we do now. nuclear power is also very safe and leaves very little waste. although it does create nuclear waste, it is not much compared to other methods, and is able to be mostly recyled. nuclear power is also very reliable unlike wind and solar power, which rely on weather and sunlight. nuclear power also has some of the lowest deaths per terawatt of power generation.

<iframe src="https://archive.ourworldindata.org/20260727-131016/grapher/death-rates-from-energy-production-per-twh.html?tab=chart" loading="lazy" style="width: 100%; height: 600px; border: 0px none;" allow="web-share; clipboard-write"></iframe>

anyways that about wraps it up thank youuu for reading to the end!!!!
![funny image](/assets/3.png)