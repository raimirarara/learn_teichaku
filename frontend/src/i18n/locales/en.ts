export const en = {
  Overview: {
    Title: "DAO Overview",
    SubTitle: "The Details of DAO and its Token",
    OrganizationCard: {
      Contributions: "Contributions",
      Contributors: "Contributors",
      Reviewer: "Reviewer",
    },
    TokenInfoCard: {
      RewardsToken: "Rewards Token",
      ContractAddress: " Contract Address",
      TokenName: "Token Name",
      TokenSymbol: "Token Symbol",
      TotalSupply: "Total Supply",
      TreasuryBalance: "Treasury Balance",
      TotalDistributionsPerSprint: "Total Distributions Per Sprint",
      Contributor: "Contributor",
      Reviewer: "Reviewer",
      Commission: "Commission",
    },
  },
  LP: {
    HeroText1: "New DAO Framework to ",
    HeroText2Colorful: "Make a Lasting Impact",
    HeroText3: " and Retain members.",
    HeroSubText:
      "Fully on-chain and decentrized DAO Framework that are friendly to Agile development.",
    Problems: {
      Title: "Problems of DAO and Our Solutions",
      Onboarding: {
        Title: "Newcomers don't have idea what the DAO are doing?",
        SolutionTitle:
          "All Contributions that DAO members have made so far is recorded and helps newcomers to understand DAO.",
        SolutionName: "The history of DAO is recorded on blockchain.",
      },
      Hurdle: {
        Title: "The hurdle to get rewards is too high!",
        SolutionTitle:
          "Any contribution is fine, just give it a try and everyone will evaluate it.",
        SolutionName: "You can register your contributions without permission!",
      },
      Reward: {
        Title: "Unclear benefits of participation",
        SolutionTitle:
          "The evaluation will be the token reward directly as it is. And evaluations and comments on your contributions are recorded on blockchain and can be exported as NFT.",
        SolutionName: "Token and NFT are issued for your contribution.",
      },
    },
  },
  Button: {
    Demo: "Demo",
    CreateYourDAO: "Create Your DAO",
    StartFromHere: "Start From Here",
    SortBy: "Sort by",
    FilterByRole: "Filter by role",
    MintNFT: "Mint NFT",
    AppMenu: "menu",
    Follow: "Follow",
    Unfollow: "Unfollow",
    ConnectWallet: "Connect Wallet",
    SaveDraft: "Save Draft",
    SubmitToBlockchain: "Submit to Blockchain",
    AddYourContribution: "Add Your Contribution",
    UpdateYourContribution: "Update Your Contribution",
    SettlePoll: "Settle Poll(Only Admin Can)",
    ChangeNetwork: (network: string) => `Change Network to ${network}`,
    Update: "Update",
    Add: "Add",
  },
  Common: {
    NodataMessage: {
      Title: "Let's Start Contributing!",
    },
    AppMenu: {
      Info: "Info",
      Events: "Events",
      Admin: "Admin",
      Overviews: "Overviews",
      History: "History",
      Contribution: "Contribution",
      SprintReview: "SprintReview",
      Assessments: "Assessments",
      Settings: "Settings",
    },
    NetworkCheck: {
      Title: "The currently connected network is not supported.",
      Text: (name: string, network: string) =>
        `${name} is running on ${network}!`,
    },
  },
  History: {
    Title: (daoname: string) => `The History of ${daoname}`,
    SubTitle: (daoname: string) =>
      `A list of contributions of the ${daoname} memebers`,
    HistoryList: {
      Contributions: "Contributions",
      NothingFound: "Nothing found",
    },
    SortKeys: {
      Newest: "Newest",
      Oldest: "Oldest",
      Largest: "Largest",
      Smallest: "Smallest",
    },
  },
  Assessment: {
    Title: "Your Assessments",
    AssessmentTabs: {
      NotConnectWallet:
        "You don't connect metamask yet. Connect wallet from right top button.",
      Total: "Total",
      Individual: "Individual",
      TotalTab: {
        TotalRewardTitle: "Total Reward",
        ComparedPreviousReward: "Compared to previous reward",
        CumulativeRewardTitle: "Cumulative Reward",
        AverageAssessmentTitle: "Average Assessment",
        RewardHistoryTitle: "Reward History",
      },
    },
    SingleAssessment: {
      EarnedTokens: "Earned tokens",
      Assessments: "Assessments",
      Contribution: "Contribution",
      Evidences: "Evidences",
      ReviewersAndComments: "Reviewers and Comments",
    },
  },
  Contribution: {
    Title: "Explain Your Contribution!",
    PollEndInfo: {
      LeftTimeText: "The current SprintReview end in",
    },
    ContributionCard: {
      Notification: {
        Title: "Your Contribution is sent to blockchain!",
        Message: "Please wait for the transaction to be completed.",
      },
      Contribution: {
        Label: "Your contribution",
        Placeholder: "What did you do for the DAO?",
      },
      Evidence: {
        Label: (num: number) => `Evidence Url ${num}`,
      },
      Role: {
        Label: "Your Roles",
        Placeholder: "Type your role",
        CreateLabel: (query: string) => `+ Create ${query}`,
      },
      ContributionExamples: {
        Title: "Pick Your Contributions!",
        Documentation: {
          Title: "Documentation",
          Description: "I created a new documentation page for ...",
        },
        BugFix: {
          Title: "Bug Fix",
          Description: "I fixed a bug in ...",
        },
        Advertisement: {
          Title: "Advertisement",
          Description: "I advertised the project on ...",
        },
        Development: {
          Title: "Development",
          Description: "I developed a new ...",
        },
        Design: {
          Title: "Design",
          Description: "I designed a new ...",
        },
        Analysis: {
          Title: "Analysis",
          Description: "I analized ...",
        },
        Anything: {
          Title: "Anything!!",
          Description: "I analized ...",
        },
      },
    },
  },
  Poll: {
    Title: "SprintReview",
    CurrentReviewerIncentive: "Current Reviewer Incentive:",
    PollSystem: {
      AlreadyVoteMessage: "You already voted but you can vote for revision",
      Notification: {
        Title: "Your Vote is sent to blockchain!",
        Message: "Please wait for the transaction to be completed.",
      },
      CandidateCard: {
        Comment: {
          Label: "comment (optional)",
          Placeholder: "Your comment",
        },
        AlertVoteMyself:
          "This is your contribution, so you can't vote for yourself",
      },
    },
  },
  Settings: {
    Title: "Settings",
    SubTitle: "Setting is being built now! Most features still don't work.",
    TokenSetting: {
      TokenDistribution: "Token for distribution",
      CurrentTokenSymbol: "Current Token Symbol:",
      AddressInput: {
        Label: "ERC20 Token Address",
      },
    },
    TreasurySetting: {
      Title: "Treasury Balance",
      SendTokenInput: {
        Label: "Send Tokens to Treasury",
        Placeholder: "Specify the amount of tokens you want to transfer",
      },
    },
    DistributionSetting: {
      Title: "Distribution",
      Contributor: {
        Label: "Contributor Distribution(Total)",
      },
      Reviewer: {
        Label: "Reviewer Distribution(Total)",
      },
    },
    PollPerspectiveSetting: {
      Title: "Poll Perspectives",
      Perspective: {
        Label: (num: number) => `Perspective ${num}`,
        InitialValues: {
          Perspective1: "quality",
          Perspective2: "quantity",
          Perspective3: "effectiveness",
        },
      },
    },
    PollDeadlineSetting: {
      Title: "Poll Deadline",
      DatePicker: {
        Placeholder: "Pick date",
        Label: "Deadline date",
      },
    },
    SBTSetting: {
      Title: "SBT For Review",
      SBTAddressInput: {
        Label: "SBT Address",
      },
    },
  },
};
