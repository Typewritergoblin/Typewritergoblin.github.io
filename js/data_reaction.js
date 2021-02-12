data_reaction = [
    {
        title: "Opportunity attack",
        icon: "crossed-swords",
        subtitle: "Enemy leaves your reach",
        description: "You can rarely move heedlessly past your foes without putting yourself in danger",
        reference: "PHB, pg. 195.",
        bullets: [
            "Trigger: enemy creature you can see leaves your reach.",
            "Make one melee attack against the provoking creature.",
            "The attack interrupts the provoking creature's movement, occurring right before the creature leaves your reach.",
            "Creatures don't provoke an opportunity attack when they teleport or when someone or something moves them without using their movement, action, or reaction."
        ]
    },
    {
        title: "Readied action",
        icon: "stopwatch",
        subtitle: "Part of your Ready action",
        description: "Execute the reaction specified by your Ready action",
        reference: "PHB, pg. 193.",
        bullets: [
            "Trigger: specified by your <strong>Ready</strong> action."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 reaction",
        description: "Cast a spell with a casting time of 1 reaction",
        reference: "PHB, pg. 192.",
        bullets: [
            "Trigger: specified by the spell.",
            "For further details, see the <strong>Cast a spell</strong> action."
        ]
    },
    {
        title: "Guard",
        icon: "shield-reflect",
        subtitle: "Enemy attacks you",
        description: "Reduce the damage you take by steeling yourself for impact",
        reference: "Icara Homebrew",
        bullets: [
            "Trigger: enemy creature you can see attacks you.",
            "Roll an <strong>Athletics</strong> check with DC 15.",
            "On a success, reduce the damage you take by your <strong>Guard</strong> value.",
            "Damage reduction takes place before any resistances are applied."
        ]
    },
    {
        title: "Parry",
        icon: "sword-break",
        subtitle: "Enemy attacks you",
        description: "Attempt to deflect the enemy blow",
        reference: "Icara Homebrew",
        bullets: [
            "Trigger: enemy creature you can see leaves your reach.",
            "Make one melee attack - compare the number to the enemy attack roll.",
            "If you match or exceed the enemy attack roll, you take half damage from the attack.",
            "Critical Success: If you roll a critical success and the enemy does not, you automatically succeed.",
            "If you roll a critical success and match or exceed the enemy attack roll, you take no damage from the attack."
        ]
    },
    {
        title: "Spellshield",
        icon: "divert",
        subtitle: "Enemy casts a spell",
        description: "Attempt to use magic to protect the target",
        reference: "Icara Homebrew",
        bullets: [
            "Trigger: enemy creature you can see casts a spell.",
            "Roll an <strong>Arcana(Trained)</strong> or <b>Channeling(Trained)</b> check against DC 15.",
            "On a success, 1 target of the spell within 30' of you takes reduced damage from it",
            "The damage is reduced by an amount equal to the spellcasting modifier of the skill check used.",
            "If you have spell slots available, you can further reduce the damage by 1d6 per spell slot spent.",
            "Damage reduction takes place before any resistances are applied."
        ]
    },
    {
        title: "Spellbreak",
        icon: "magic-swirl",
        subtitle: "Enemy casts a spell",
        description: "Attempt to disrupt the enemy spell using your own magical energy",
        reference: "Icara Homebrew",
        bullets: [
            "Trigger: A creature you can see within 60' casts a spell.",
            "Roll an <strong>Arcana(Trained)</strong> or <b>Channeling(Trained)</b> check.",
            "The DC equals 10 + (2 per lvl of the enemy spell), results vary by check",
            "If you fail by more than 5, you lose available spell slots equal to the level of the enemy spell.",
            "If you fail by 5 or less, you lose no spell slots and do not effect the enemy spell.",
            "If you succeed, you may spend spell slots equal to enemy spell level to either halve its damage, grant all targets advantage on saves, or reduce its duration by half.",
            "If you succeed by 5 or more, you may spend spell slots equal to the enemy spell level to cancel it altogether. The enemy loses their spell."
        ]
    },
]
