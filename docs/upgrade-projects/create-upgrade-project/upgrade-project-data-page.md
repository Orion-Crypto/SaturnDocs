---
sidebar_position: 3
---

# Upgrade Levels

The **Upgrade Levels** page allows you to customize the level requirements and price of upgrading your project's NFTs.

![Upgrade Levels 1](/img/upgrade-projects/create-upgrade-project/upgrade-project-data/upgrade-projects-data-1.png)
![Upgrade Levels 2](/img/upgrade-projects/create-upgrade-project/upgrade-project-data/upgrade-projects-data-2.png)
![Upgrade Levels 3](/img/upgrade-projects/create-upgrade-project/upgrade-project-data/upgrade-projects-data-3.png)

All NFTs start at level 1 so lets add a level. This level will require 100 experience and cost 10 ada to upgrade too. Experience points can be added via our API or manually in the Upgrade NFTs progress panel for the specific NFT. Our screen should now look like this:

![Upgrade Levels Add Level](/img/upgrade-projects/create-upgrade-project/upgrade-project-data/upgrade-projects-add-level.png)

Here are some built in conditions that we can add:

-   **Experience Points**: This allows the project owner to require a certain amount of experience points to upgrade. Experience points for an NFT can be added in the App or via the API.
-   **Time Since Last Upgrade**: This is the amount of time since an upgrade occured. This ensures that if a user upgrades to a level, that they must wait a certain amount of time before upgrade to this current level.
-   **True / False**: This is a manual boolean True / False that you can set manually on the Upgrade NFTs progress panel. This can also be set in the API to control when a user can upgrade their NFT (such as after defeating a boss in a videogame)
-   **Require Assets From Policy Id**: This level can only be upgraded to if the owner has an NFT from a specific Policy Id.
-   **Require a Specific Asset**: This level can only be upgraded to if the owner has a specific asset.

We can further add multiple levels, multiple conditions, and multiple prices. But we will just leave Level 2 for now. In the next section, we will show how to bulk upload images and metadata for our level system. Since NFT projects have lots of levels and NFTs, its important to have a way to bulk upload them all.
